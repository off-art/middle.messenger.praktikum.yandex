import Block from './Block';
import Route from './Route';

class Router {
    // eslint-disable-next-line no-use-before-define
    private static __instance: Router;

    private _rootQuery: string;

    private _pathnames: string[];

    private _currentRoute: Route | null;

    public routes: Route[];

    public history: History;

    private _unprotectedPaths: string[];

    private _onRouteCallback: () => void;

    private _onNotRouteCallback: () => void;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            // eslint-disable-next-line no-constructor-return
            return Router.__instance;
        }
        Router.__instance = this;
        this.routes = [];
        this._pathnames = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        this._unprotectedPaths = [];
        this._onRouteCallback = () => {};
        this._onNotRouteCallback = () => {};
    }

    get currentRoute() {
        return this._currentRoute;
    }

    use(pathname: string, block: Block<any>) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });

        this.routes.push(route);
        this._pathnames.push(pathname);

        return this;
    }

    back() {
        this.history.back();
        const pathname = this._hasRoute(window.location.pathname);
        this._onRoute(pathname);
    }

    forward() {
        this.history.forward();
        const pathname = this._hasRoute(window.location.pathname);
        this._onRoute(pathname);
    }

    private _hasRoute(pathname: string) {
        if (!this._pathnames.includes(pathname)) {
            return '*';
        }
        return pathname;
    }

    start() {
        window.onpopstate = () => {
            const pathname = this._hasRoute(window.location.pathname);
            this._onRoute(pathname);
        };

        const pathname = this._hasRoute(window.location.pathname);
        this._onRoute(pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;

        route.render();
        if (!this._unprotectedPaths.includes(pathname)) {
            this._onRouteCallback();
        }
        if (this._unprotectedPaths.includes(pathname)) {
            this._onNotRouteCallback();
        }
    }

    public setUnprotectedPaths(paths: string[]) {
        this._unprotectedPaths = paths;
        return this;
    }

    public onRoute(callback: () => void) {
        this._onRouteCallback = callback;
        return this;
    }

    public onNotRoute(callback: () => void) {
        this._onNotRouteCallback = callback;
        return this;
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}

export default Router;

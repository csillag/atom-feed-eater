declare module 'meteor/react-meteor-data' {
    import ComponentClass = __React.ComponentClass;
    interface IReactMeteorData {
        data: any;
    }
    export var ReactMeteorData: IReactMeteorData;
    // param `component:ComponentClass<P>` causes problem if the componet
    // when the component has `static propTypes`
    function createContainer<P>(propsfn: (props: P) => any, component:any): ComponentClass<P>;
    export { createContainer };
}


declare module 'meteor/session' {
    export module Session {
        function get(key:string): any;
        function set(key:string, value:any): void;
        function clear(key: string): void;
        function setAuth(key: string, value:any): void;
        function setPersistent(key: string, value:any): void;
    }
}

declare module 'redux-axios-middleware' {
    export default function foo(bar:any):any;
}

interface StyleDict {
    [id: string]: string;
}

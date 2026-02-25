import {Header} from "./Header.tsx";

interface ILayout {
    children?: React.ReactNode;
}

export const Layout = ({ children }:ILayout) => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    )
}
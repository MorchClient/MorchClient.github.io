import Header from "./comp/Header";

function NotFound(){
    document.title = "Morch Client - Not Found"
    return (
        <>
        <Header/>
        <h1>404</h1>
        The link that you provided dosen&apos;t exist...
        </>
    )
}
export default NotFound;
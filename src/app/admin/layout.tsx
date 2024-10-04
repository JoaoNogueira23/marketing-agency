import HeaderAdmin from "@/components/Header/HeaderAdmin";
import '../../styles/layouts/stylesManegerPage.sass'

export default function AdminLayout(
    {
        children
    } : Readonly<{
        children: React.ReactNode
    }>
){
    return(
        <div className="managerContainer">
            <HeaderAdmin />
            {children}
        </div>
    )
}
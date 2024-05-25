import Link from 'next/link';
export default function Dashboard(){
    return(
        <main>
            <div className="flex flex-col">
                MENU
                <Link href="./ui/birthday-cakes">Birthday Cakes</Link>
                <Link href="./ui/anniversary-cakes">Anniversary Cakes</Link>
                <Link href="./ui/kids-cakes">Kids Cakes</Link>
            </div>
        </main>
    )
}

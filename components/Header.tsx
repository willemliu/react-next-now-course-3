import Link from "next/link";

export function Header(props: any) {
    return (
        <header>
            <Link
                href={`/index?section=section_name&id=12345`}
                as="/section_name/12345"
                passHref={true}
                scroll={false}
            >
                <a>Home</a>
            </Link>
            <Link href="/DataPage">
                <a>Data Page</a>
            </Link>
            <style jsx>{`
                header {
                    background: black;
                }
                a {
                    padding: 1rem;
                    color: white;
                }
            `}</style>
        </header>
    );
}

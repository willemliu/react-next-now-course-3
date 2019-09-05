import "fetch-everywhere";
import Paragraph from "../components/Paragraph";
import ReactMarkdown from "react-markdown/with-html";
import { GithubStyles } from "../styles/github";
import Link from "next/link";
import getConfig from "next/config";
import { Header } from "../components/Header";
const { serverRuntimeConfig = {} } = getConfig() || {};

function Index(props: any) {
    return (
        <>
            <ReactMarkdown source={props.markdown} escapeHtml={false} />

            <h1 id="demo">
                DEMO: {props.section ? `/${props.section}` : null}
                {props.id ? `/${props.id}` : null}
            </h1>
            <Header />
            <Paragraph
                style={{ color: "red", userSelect: "none" }}
                text={"This is a paragraph. Why don't you click me?"}
            />
            <div>
                <Link href="/DataPage">
                    <a>* Difference between SSR and CSR.</a>
                </Link>
            </div>
            <div>
                <Link
                    href={`/index?section=sectionName&id=123`}
                    as="/section/123"
                    passHref={true}
                    scroll={false}
                >
                    <a>* URL params</a>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        process.env.SECRET isn't available client-side:
                        <span style={{ color: "red" }}>
                            {serverRuntimeConfig.SECRET}
                        </span>
                    </li>
                    <li>
                        process.env.PUBLIC_SECRET is available client-side:
                        <span style={{ color: "green" }}>
                            {process.env.PUBLIC_SECRET}
                        </span>
                    </li>
                </ul>
            </div>
            {GithubStyles}
        </>
    );
}

Index.getInitialProps = async ({ query }) => {
    const markdown = await fetch(
        "//course-3.willemliu.now.sh/static/README.md"
    ).then((res) => res.text());
    return { markdown, section: query.section, id: query.id };
};

export default Index;

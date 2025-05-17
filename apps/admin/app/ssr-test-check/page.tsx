import SSRTesting from "./components/ssr-testing";

export default async function SkillsPageSSR() {
  return <SSRTesting skills={["ddd", "jkjak", "djdgjq"]} />;
}

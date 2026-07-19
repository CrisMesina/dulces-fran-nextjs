export default function sitemap() {
    const baseURL ="https://www.dulcesfran.cl";


    return[
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrecuency: "weekly",
            priority: 1
        }
    ]

}
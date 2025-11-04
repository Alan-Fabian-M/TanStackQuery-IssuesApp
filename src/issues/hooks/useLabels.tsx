import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interfaces";




export const useLabels = () => {

    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,

        // placeholderData: [
        //     {
        //         "id": 69105383,
        //         "node_id": "MDU6TGFiZWw2OTEwNTM4Mw==",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        //         "name": "Browser: IE",
        //         "color": "c7def8",
        //         "default": false,
        //     } satisfies GithubLabel,
        //     {
        //         "id": 69105358,
        //         "node_id": "MDU6TGFiZWw2OTEwNTM1OA==",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
        //         "name": "Browser: Safari",
        //         "color": "c7def8",
        //         "default": false,
        //         "description": null
        //     } satisfies GithubLabel,
        // ],

        // initialData: [
        //     {
        //         "id": 69105383,
        //         "node_id": "MDU6TGFiZWw2OTEwNTM4Mw==",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        //         "name": "Browser: IE",
        //         "color": "c7def8",
        //         "default": false,
        //     } satisfies GithubLabel,
        //     {
        //         "id": 69105358,
        //         "node_id": "MDU6TGFiZWw2OTEwNTM1OA==",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
        //         "name": "Browser: Safari",
        //         "color": "c7def8",
        //         "default": false,
        //         "description": null
        //     } satisfies GithubLabel,
        // ]
    });


    return {
        labelsQuery
    }
}

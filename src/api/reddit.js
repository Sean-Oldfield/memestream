export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}

export const getSubreddits = async () => {
    const response = await fetch(`subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
}

// export const getPostComments = async (permalink) => {
//     const response = await fetch(`${permalink}.json`);
//     const json = await response.json();
//     return json[1].data.children.map((subreddit) => subreddit.data);
// }
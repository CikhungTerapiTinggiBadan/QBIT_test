type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
    {
    commentId: 1,
    commentContent: 'Hai',
        replies: [
            {
            commentId: 11,
            commentContent: 'Hai juga',
            replies: [
                {
                commentId: 111,
                commentContent: 'Haai juga hai jugaa'
                },
                    {
                    commentId: 112,
                    commentContent: 'Haai juga hai jugaa'
                    }
            ]
            },
            {
            commentId: 12,
            commentContent: 'Hai juga',
            replies: [
                {
                commentId: 121,
                commentContent: 'Haai juga hai jugaa'
                }
            ]
            }
        ]
    },
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
]

function Total(data: IComment[]): number {
    let comments = 0;

    for(const comment of data) {
        comments ++;
        
        if (comment.replies && comment.replies.length > 0) {
           comments += Total(comment.replies);
        }
    }
    return comments;
}

console.log("Total komentar adalah", Total(comments))
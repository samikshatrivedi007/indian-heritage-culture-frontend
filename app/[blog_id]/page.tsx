
type a = Promise<{
        blog_id : string;
    }
>
export default async function  blogpage({ params }:{ params: a}) {
    const myblogid = (await params).blog_id;

    return (<div>
        {
            myblogid
        }
    </div>)
}
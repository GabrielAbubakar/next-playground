export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    // const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json()

    return {
        props: { user: data }
    }
}


const User = ({ user }) => {
    return (
        <div>
            <h1>Hi there {user.name}</h1>
        </div>
    )
}

export default User;
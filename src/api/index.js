const USERS_API =
    'https://my-json-server.typicode.com/mrIliya/proxy-db/db'

export const getUsers = async () => {
    try {
        const data = await fetch(USERS_API)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return data
            })
        if (!data) {
            console.log('no data')
        }
        return data.users
    } catch (error) {
        console.log(error)
    }
}

export const getAlbums = async (index) => {
    try {
        const data = 
        await fetch(USERS_API)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return data
            })
        if (!data) {
            console.log('no data')
        }
        return data.users[index].albums
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = async (index) => {
    try {
        const data = 
        await fetch(USERS_API)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return data
            })
        if (!data) {
            console.log('no data')
        }
        return data.users[index].posts
    } catch (error) {
        console.log(error)
    }
}

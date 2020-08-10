
    export async function getAll(url) {
        try {
            var resp = await fetch(url);
            var data = await resp.json();
            return data;
        } catch (err) {
            console.log(err)
        }
    }

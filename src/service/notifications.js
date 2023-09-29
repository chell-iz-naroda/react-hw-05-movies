import toast from "react-hot-toast";

export function Error () {
    toast.error('Oops! Something went wrong... Try reload the page...');
}

export function ErrorSearch () {
    toast.error('There are no movies for your query. Please, enter another one');
}
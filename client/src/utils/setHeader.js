export const setHeader = () => {
    const jwt = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null;
    return {headers: {'Authorization': `JWT ${jwt}`}};
}
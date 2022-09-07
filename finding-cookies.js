const getCookiesByName =(name)=>
{
    const cookies = document.cookie.split(';');

    const mapping = cookies.find(item=> item.includes(name));
    // mapping.split('=')[1]
    return mapping.split('=');
    
}

getCookiesByName();
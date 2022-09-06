value = confirm("Do you want to see your Location?");

const checkUrl = ()=>{
    url = location.href();
    return url;
}

if(value)
{
    console.log(checkUrl);

}





function customeRender(reactElement,container){

    const newDom = document.createElement(reactElement.type)
    newDom.innerHTML = reactElement.Children;
    newDom.setAttribute('href',reactElement.props.href)
    newDom.setAttribute('target',reactElement.props.target)


  container.appendChild(newDom)
}



const reactElement = {
    type :'a',
    props :{
        href : 'https://google.com',
        target : "_blank"
    },
    Children :"Click me to visit Google"
}

const mainContainer = document.querySelector("#root")

customeRender(reactElement,mainContainer)
import mycontext from './context';


const myState = (props)=>{

    const  values = {
        name: "ADIL",
        class: "10th Red"
    }
    return(
        <mycontext.Provider value={values}>
            {props.children}
        </mycontext.Provider>
    )
}

export default myState
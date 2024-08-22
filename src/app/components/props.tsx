const Props = (props:{name:string,cast:string})=> {
  console.log("props",props)
    return <div>
      <h1>propstest</h1>
      <h2>{`hello${props.name,props.cast}`}</h2>
      
    </div>
  }
  export default Props
  
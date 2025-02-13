export default function ContainerHeader({children}){
  return (
    <>
    <div className="containerHeader">
      <div><h1>{children}</h1></div>
      <div>Step 1/3</div>
    </div>
    <progress value={0.3} max={1} />
    </>
    )
}
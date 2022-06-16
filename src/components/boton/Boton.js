const Boton = ({ label, span, classButton, onClick }) => {
    return <button className={classButton} onClick={onClick} >{label}{span}</button>
}
export default Boton;

const Boton = ({ label, span, classButton, onClick }) => <button className={classButton} onClick={onClick} >{label}{span}</button>;

export default Boton;
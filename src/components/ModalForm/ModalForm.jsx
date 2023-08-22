import "./ModalForm.css"
export default function ModalForm() {
  return (
    <form className="formUser">
        <h2>Cadastro</h2>
        <p>Faça já seu login na plataforma.</p>
        <input type="text" placeholder='Digite seu melhor Email...'/>
        <input type="text" placeholder='Digite sua melhor senha...'/>
        <button>Enviar</button>
        <div>Por favor ler os <span>termos de segurança</span></div>
      </form>
  )
}

//creamos un componente de menu
// componentes/c_menu.component.tsx
export default function C_menuComponent() {
    return (
        <>
            <h1>C Menu Component</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/a_hola_mundo">A Hola mundo</a></li>
                <li><a href="/b_hola_mundo">B Hola mundo</a></li>
                <li><a href="/c_componentes">C Componentes</a></li>
                <li><a href="/d_use_state">D Use State</a></li>
                <li><a href="/e_custom_hook">E Custom Hook</a></li>
                <li><a href="/f_use_context">F use context</a></li>
                <li><a href="/g_ejemplo_criptomoneda">G Cripto</a></li>
                <li><a href="/h_mui_konsta">H Mui Konsta</a></li>
                <li><a href="/i_react_hook_form">I Forms</a></li>
            </ul>
        </>
    )
}
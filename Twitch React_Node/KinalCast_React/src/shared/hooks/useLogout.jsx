export const useLogout = () => {
    console.log('Estoy cerrando sesion');
    localStorage.removeItem('user')
    window.location.href = '/channels'
}

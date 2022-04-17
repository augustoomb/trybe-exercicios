import React from 'react';

class Profile extends React.Component {
  render() {
    const { cidade } = this.props.match.params
    return (
      <div>        
        Meu perfil: { this.props.name }
        <br />
        Cidade: { cidade }
      </div>
    )
  }
}

export default Profile;

//continuando explicação da rota do app.js:

/*
-todos os parametros vieram via props
-o name veio via props normal, por isso pego ele do jeito que conheço: this.props.name
-no caso da cidade, veio dentro da prop do router. Por isso pego ela diferente: this.props.match.params

OBS: acompanhando pelo plugin do react, indo até a pag. (ex nesse caso: Route > Router.Consumer> Router.provider> profile) 

se eu clicar em profile, consigo ver informações do grande obj da props que eu comentei no app.js
tem várias infos, mas o importante pra mim agora foi só pegar o parametro passado no 'name'

*/
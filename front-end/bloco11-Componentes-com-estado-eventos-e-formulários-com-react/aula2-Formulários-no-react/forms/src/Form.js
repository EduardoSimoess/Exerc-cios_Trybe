import React from "react";

class Form extends React.Component {
    render() {
      const {nome, email, city} = this.props.value;
      const { changeHandler, checkCity } = this.props;
        return(
            <form>
            <fieldset>
              <label>
                Your name:
                <input autoCapitalize={"characters"} type="text" maxLength="40" name="nome" required  value={ nome } onChange={ changeHandler }></input>
              </label>

              <label>
                Your email:
                <input type="email" name="email" maxLength="50" required value={ email } onChange={ changeHandler }></input>
              </label>
              
              <label>
                The city you live in:
                <input type="text" name="city" maxLength="200" required value={ city } onChange = { changeHandler } onBlur={ checkCity }></input>
              </label>
            </fieldset>
          </form>
        )
        
    }
}

export default Form;
import React from 'react'
import { Form, Input, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Block, Button } from 'components/LoginForm'


class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item validateStatus="succsess" hasFeedback>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    )
  }
}

export default LoginForm
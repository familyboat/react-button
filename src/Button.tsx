import * as React from 'react'
import styles from './styles.module.css'

export enum ButtonVariant {
  primary = 'primary'
}

export enum ButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  children?: React.ReactNode
  className?: string
  component?: React.ElementType<any> | React.ComponentType<any>
  isDisabled?: boolean
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary'
  innerRef?: React.Ref<any>
}

const ButtonBase: React.FunctionComponent<ButtonProps> = ({
  children = null,
  className = '',
  component = 'button',
  isDisabled = false,
  isLoading = false,
  type = ButtonType.button,
  variant = ButtonVariant.primary,
  innerRef,
  ...props
}: ButtonProps) => {
  const Component = component as any
  const isButtonElement = Component === 'button'

  return (
    <Component
      {...props}
      className={`${styles.button} ${className}`}
      disabled={isButtonElement ? isDisabled : null}
      type={isButtonElement ? type : null}
      ref={innerRef}
    >
      {isLoading && <span className={styles.spinner}>0</span>}
      {children}
    </Component>
  )
}

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<any>) => (
    <ButtonBase innerRef={ref} {...props} />
  )
)

Button.displayName = 'Button'

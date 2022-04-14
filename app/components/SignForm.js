import React, { useRef } from 'react'
import BorderedInput from './BorderedInput'

function SignForm({ isSignUp, onSubmit, form, createChangeTextHandler }) {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    return (
        <> 
            <BorderedInput 
            hasMarginBottom 
            placeholder='이메일'
            value={form.email}
            onChangeText={createChangeTextHandler('email')}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            keyboardType="email-address"
            returnKeytype="next"
            onSubmitEditing={() => passwordRef.current.focus()} />

            <BorderedInput placeholder='비밀번호'
                hasMarginBottom={isSignUp}
                value={form.password}
                onChangeText={createChangeTextHandler('password')}
                secureTextEntry
                ref={passwordRef}
                returnKeytype={isSignUp ? 'next' : 'done'}
                onSubmitEditing={() => {
                    if (isSignUp) {
                        confirmPasswordRef.current.focus();
                    } else {
                        onSubmit();
                    }
                }} />

            {isSignUp && (
                <BorderedInput 
                    placeholder="비밀번호 확인"
                    value={form.confirmPassword}
                    onChangeText={createChangeTextHandler('confirmPassword')}
                    secureTextEntry
                    ref={confirmPasswordRef} 
                    returnKeytype="done"
                    onSubmitEditing={onSubmit} />)}


        </>

    )

}



export default SignForm;
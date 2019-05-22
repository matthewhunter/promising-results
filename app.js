let previousResult
const errorMessage = document.getElementById('error-message')
const errorWindow = document.getElementById('error')

const displayPromiseFormula = (previousPromiseResult, operator, constant, result) => {
    const formula = document.createElement('p')
    formula.classList.add('magictime', 'spaceInDown')
    formula.textContent = `${previousPromiseResult} ${operator} ${constant} = ${result}`
    document.getElementById('promises').append(formula)
}

const displayAsyncAwaitFormula = (previousAsyncAwaitResult, operator, constant, result) => {
    const formula = document.createElement('p')
    formula.classList.add('magictime', 'spaceInDown')
    formula.textContent = `${previousAsyncAwaitResult} ${operator} ${constant} = ${result}`
    document.getElementById('async').append(formula)
}

const promise = () => {

    let previousResult = 6
    slowMath.add(6, 2)
        .then((result) => {
            displayPromiseFormula(previousResult, '+', 2, result)
            previousResult = result
            return slowMath.multiply(result, 2)
        }).then((result) => {
            displayPromiseFormula(previousResult, 'x', 2, result)
            previousResult = result
            return slowMath.divide(result, 4)
        }).then((result) => {
            displayPromiseFormula(previousResult, '/', 4, result)
            previousResult = result
            return slowMath.subtract(result, 3)
        }).then((result) => {
            displayPromiseFormula(previousResult, '-', 3, result)
            previousResult = result
            return slowMath.add(result, 98)
        }).then((result) => {
            displayPromiseFormula(previousResult, '+', 98, result)
            previousResult = result
            return slowMath.remainder(result, 2)
        }).then((result) => {
            displayPromiseFormula(previousResult, '%', 2, result)
            previousResult = result
            return slowMath.multiply(result, 50)
        }).then((result) => {
            displayPromiseFormula(previousResult, 'x', 50, result)
            previousResult = result
            return slowMath.remainder(result, 40)
        }).then((result) => {
            displayPromiseFormula(previousResult, '%', 40, result)
            previousResult = result
            return slowMath.add(result, 32)
        }).then((result) => {
            displayPromiseFormula(previousResult, '+', 32, result)
        }).catch((error) => {
            errorMessage.textContent = error
            errorWindow.style.display = 'flex'
        })
}

const asyncAwait = async () => {
    let previousResult = 6
    try {
        let result = await slowMath.add(6, 2)
        displayAsyncAwaitFormula(previousResult, '+', 2, result)
        previousResult = result
        result = await slowMath.multiply(result, 2)
        displayAsyncAwaitFormula(previousResult, 'x', 2, result)
        previousResult = result
        result = await slowMath.divide(result, 4)
        displayAsyncAwaitFormula(previousResult, '/', 4, result)
        previousResult = result
        result = await slowMath.subtract(result, 3)
        displayAsyncAwaitFormula(previousResult, '-', 3, result)
        previousResult = result
        result = await slowMath.add(result, 98)
        displayAsyncAwaitFormula(previousResult, '+', 98, result)
        previousResult = result
        result = await slowMath.remainder(result, 2)
        displayAsyncAwaitFormula(previousResult, '%', 2, result)
        previousResult = result
        result = await slowMath.multiply(result, 50)
        displayAsyncAwaitFormula(previousResult, 'x', 50, result)
        previousResult = result
        result = await slowMath.remainder(result, 40)
        displayAsyncAwaitFormula(previousResult, '%', 40, result)
        previousResult = result
        result = await slowMath.add(result, 32)
        displayAsyncAwaitFormula(previousResult, '+', 32, result)
    }
    catch (error) {
        errorMessage.textContent = error
        errorWindow.style.display = 'flex'
    }
}

promise()
asyncAwait()
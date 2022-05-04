let primalValues = ['Jane Smith', '$12,450', 'in her bank account', 'a Toyota Yaris', 'is a lot of money']
let conjunctions = ['has', 'will use her', 'plans to buy', 'for', 'to buy']

const siteIfo = {
    paragraph1: [primalValues[0], conjunctions[0], primalValues[1], primalValues[2]],
    paragraph2: [primalValues[1], primalValues[4]],
    paragraph3: [primalValues[0], conjunctions[1], primalValues[3]],
    paragraph4: [primalValues[0], conjunctions[1], primalValues[1], conjunctions[4], primalValues[3]],
    paragraph5: [primalValues[1], primalValues[4], conjunctions[3], primalValues[3]],
    break1: '',
    indentation1: '',
    break2: '',
    paragraph6: [primalValues[1], primalValues[4]],
    paragraph7: [primalValues[1], primalValues[4], conjunctions[3], primalValues[3]],
    paragraph8: [primalValues[0], conjunctions[1], primalValues[3]],
    paragraph9: [primalValues[0], conjunctions[0], primalValues[1], primalValues[2]],
    paragraph10: [primalValues[0], conjunctions[1], primalValues[1], conjunctions[4], primalValues[3]],
    break3: '',
    indentation2: '',
    break4: '',
    paragraph11: [primalValues[0], conjunctions[1], primalValues[3]],
    paragraph12: [primalValues[1], primalValues[4], conjunctions[3], primalValues[3]],
    paragraph13: [primalValues[0], conjunctions[1], primalValues[1], conjunctions[4], primalValues[3]],
    paragraph14: [primalValues[0], conjunctions[0], primalValues[1], primalValues[2]],
    paragraph15: [primalValues[1], primalValues[4]],
}

const createParagraphs = (array) => {
    let div = document.createElement('div')
    let content = document.createElement('p')
    content.textContent = array.join(' ') + '.'
    console.log(array.join(' ') + '.')
    div.appendChild(content)
    return div
}
const createIndentation = () => {
    let div = document.createElement('div')
    let content = document.createElement('span')
    content.textContent = '============================================='
    console.log('=============================================')
    div.appendChild(content)
    return div
}

const createBreak = () => {
    console.log('')
    return document.createElement('br')
}

const createContent = (textObject) => {
    let div = document.createElement('div')
    let objectKey = Object.keys(textObject)
    objectKey.map(key => {
        if (key.includes('paragraph')) {
            return div.appendChild(createParagraphs(textObject[key]))
        } else if (key.includes('indentation')) {
            return div.appendChild(createIndentation())
        } else if (key.includes('break')) {
            return div.appendChild(createBreak())
        } else { return }
    })
    return document.getElementById('root').appendChild(div)

}

createContent(siteIfo)
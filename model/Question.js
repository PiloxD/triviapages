
/**
 * Esta clase construye una pregunta de cualquier nivel
 *
 * @version 1.0.0 14/07/2022
 * @author Andrés Camilo Díaz Merlano
 * @since 1.0.0
 */

class Question {
    constructor(question, a, b, c, d, respuesta) {
        this.question = question
        this.a = a
        this.b = b
        this.c = c
        this.d = d
        this.respuesta = respuesta
    }
}

const pregunta1Nivel1 = new Question(
    "¿Cuál es el nombre del río más largo del mundo?", "Río Nilo", "Río Amazonas", "Río Danubio", "Río Magdalena", "Río Amazonas")
const pregunta2Nivel1 = new Question(
    "¿Cuál es el océano más grande del mundo?", "Océano Índico", "Océano Pacífico", "Océano Atlántico", "Océano Antártico", "Océano Pacífico")
const pregunta3Nivel1 = new Question(
    "¿Cuál es el país más grande del mundo?", "China", "Rusia", "India", "Nueva Zelanda", "Rusia")
const pregunta4Nivel1 = new Question(
    "¿Cuál es el país que tiene forma de bota?", "España", "Honduras", "Italia", "Nueva Zelanda", "Italia")
const pregunta5Nivel1 = new Question(
    "¿Cuál es el país más poblado de la tierra?", "Estados Unidos", "China", "Rusia", "Nueva Zelanda", "China")

const pregunta1Nivel2 = new Question(
    "¿Cuál es la ciudad de los rascacielos?", "Tokio", "New York", "Hong Kong", "Auclkand", "New York")
const pregunta2Nivel2 = new Question(
    "¿En qué país se encuentra ubicada la Casa Rosada?", "Chile", "Argentina", "Mexico", "Colombia", "Argentina")
const pregunta3Nivel2 = new Question(
    "¿Cuál es la capital de Nicaragua?", "Santiago", "Brasilia", "Managua", "Sincelejo", "Managua")
const pregunta4Nivel2 = new Question(
    "¿En qué país está ubicada la ciudad de Monterrey?", "Colombia", "Venezuela", "Perú", "México", "México")
const pregunta5Nivel2 = new Question(
    "¿En qué continente se encuentra Surinam?", "África", "América del Sur", "Oceanía", "Europa", "América del Sur")

const pregunta1Nivel3 = new Question(
    "¿¿Cuándo terminó la II Guerra Mundial?", "1945", "1947", "1997", "1991", "1945")
const pregunta2Nivel3 = new Question(
    "¿En qué año llegó Cristobal Colón a América?", "1429", "1947", "1429", "1492", "1492")
const pregunta3Nivel3 = new Question(
    "¿Quién es el padre del psicoanálisis?", "Carl Gustav Jung", "Skinner", "Sigmund Freud", "Platón", "Sigmund Freud")
const pregunta4Nivel3 = new Question(
    "¿Quién escribió La Odisea?", "Virgilio", "Homero", "Cervantes", "Platón", "Homero")
const pregunta5Nivel3 = new Question(
    "¿A qué se denomina séptimo arte?", "Pintura", "Escultura", "Cine", "Fotografía", "Cine")

const pregunta1Nivel4 = new Question(
    "¿Cuáles son las notas musicales?", "Do, Re, Mi", "Do, Re, Mi, Sol, La, Si, Do", "Do, Re, Mi, Fa, Sol, La, Si", "Do, Fa, Mi, re, Sol, Si, La", "Do, Re, Mi, Fa, Sol, La, Si")
const pregunta2Nivel4 = new Question(
    "¿Quién escribió Cien años de soledad?", "Paulo Coehlo", "Camilo José Cela", "Mario Vargas Llosa", "Gabriel García Márquez", "Gabriel García Márquez")
const pregunta3Nivel4 = new Question(
    "¿Quién es denominado el Rey del Rock and Roll en Estados Unidos?", "Bruce Springsteen", "Michael Jackson", "Elvis Presley", "Justin Beiber", "Elvis Presley")
const pregunta4Nivel4 = new Question(
    "¿Cuál es el elemento químico más abundante en la corteza terrestre?", "Oxígeno", "Nitrógeno", "Carbono", "Helio", "Oxígeno")
const pregunta5Nivel4 = new Question(
    "¿Cómo se denomina al resultado de una multiplicación?", "Múltiplo", "Resultado", "Producto", "Divisor", "Producto")

const pregunta1Nivel5 = new Question(
    "¿A cuánto equivale el numero Pi?", "3.1614", "3.1416", "3.416", "3.1516", "3.1416")
const pregunta2Nivel5 = new Question(
    "¿Cuál es el primero de los números primos?", "3", "0", "2", "1", "2")
const pregunta3Nivel5 = new Question(
    "¿Cómo se denomina al tipo de triángulo que tiene sus tres lados iguales?", "Isósceles", "Equilátero", "Recto", "De Pascal", "Equilátero")
const pregunta4Nivel5 = new Question(
    "¿Cuál es el gas que se encuentra en mayor cantidad en el aire que respiramos?", "Nitrógeno", "Oxígeno", "Carbono", "Helio", "Nitrógeno")
const pregunta5Nivel5 = new Question(
    "¿Cuál es el símbolo químico del oro?", "Or", "Au", "Ao", "Fe", "Au")

export const preguntasLVL1 = [
    pregunta1Nivel1,
    pregunta2Nivel1,
    pregunta3Nivel1,
    pregunta4Nivel1,
    pregunta5Nivel1]

export const preguntasLVL2 = [
    pregunta1Nivel2,
    pregunta2Nivel2,
    pregunta3Nivel2,
    pregunta4Nivel2,
    pregunta5Nivel2]

export const preguntasLVL3 = [
    pregunta1Nivel3,
    pregunta2Nivel3,
    pregunta3Nivel3,
    pregunta4Nivel3,
    pregunta5Nivel3]

export const preguntasLVL4 = [
    pregunta1Nivel4,
    pregunta2Nivel4,
    pregunta3Nivel4,
    pregunta4Nivel4,
    pregunta5Nivel4]
    
export const preguntasLVL5 = [
    pregunta1Nivel5,
    pregunta2Nivel5,
    pregunta3Nivel5,
    pregunta4Nivel5,
    pregunta5Nivel5]

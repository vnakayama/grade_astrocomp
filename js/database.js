/* Number of total semesters: */
window.semesters = 8;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = [
    [ // Astronomy: Astrophysics
        // First term
        { name: "Introdução à Astronomia", credits: 2, code: "OVL111", semester: 1}, // 0
        { name: "Computação I", credits: 4, code: "MAB121", semester: 1}, // 1
        { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1}, // 2
        { name: "Física I", credits: 4, code: "FIT111", semester: 1}, // 3
        { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1}, // 4
        // Second term
        { name: "Astronomia Esférica", credits: 5, code: "OVL121", semester: 2, category: 1}, // 5
        { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1}, // 6
        { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: [2], category: 1}, // 7
        { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [2, 3], category: 1}, // 8
        { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [3, 4], category: 1}, // 9
        // Third term
        { name: "Laboratório de Astronomia", credits: 2, code: "OVL231", semester: 3, category: 1}, // 10
        { name: "Métodos Computacionais da Astronomia", credits: 5, code: "OVL232", semester: 3, requirements: [1,6], category: 1}, // 11
        { name: "Introdução à Estatística", credits: 4, code: "MAD124", semester: 3, category: 1}, // 12
        { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [7], category: 1}, // 13
        { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [3, 7], category: 1}, // 14
        { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [9], category: 1}, // 15
        // Fourth term
        { name: "Astrofísica Geral", credits: 5, code: "OVL241", semester: 4, requirements: [2,14], category: 1}, // 16
        { name: "Física Moderna I", credits: 4, code: "FIN242", semester: 4, requirements: [14], category: 1}, // 17
        { name: "Mecânica Clássica I", credits: 4, code: "FIW243", semester: 4, requirements: [8,13], category: 1}, // 18
        { name: "Métodos da Física Teórica I", credits: 4, code: "FIW245", semester: 4, requirements: [13], category: 1}, // 19
        { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [14], category: 1}, // 20
        { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [15], category: 1}, // 21
        // Fifth term
        { name: "Sistemas Planetários", credits: 5, code: "OVL352", semester: 5, requirements: [5,18], category: 1}, // 22
        { name: "Técnica Observacional Astronômica", credits: 5, code: "OLV351", semester: 5, requirements: [10,16], category: 1}, // 23
        { name: "Mecânica Quântica I", credits: 4, code: "FIW356", semester: 5, requirements: [20,19,17], category: 1}, // 24
        { name: "Eletromagnetismo I", credits: 4, code: "FIW244", semester: 5, requirements: [20,19], category: 1}, // 25
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 5, category: 1}, // 26
        // Sixth term
        { name: "Evolução do Pensamento Astronômico", credits: 4, code: "OVL361", semester: 6, requirements: [16], category: 1}, // 27
        { name: "Termodinâmica e Física Estatística", credits: 6, code: "FIW363", semester: 6, requirements: [20,13], category: 1}, // 28
        { name: "Astroestatística", credits: 4, code: "OVL362", semester: 6, requirements: [19,12,11], category: 1}, // 29
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 6, category: 1}, // 30
        { name: "Atividades Acad. Optativas", credits: 4, semester: 6, category: 1}, // 31
        // Seventh term
        { name: "Tratamento de Dados Astronômicos", credits: 4, code: "OVL474", semester: 7, requirements: [16,29], category: 1}, // 32
        { name: "Prática Observacional em Astronomia", credits: 4, code: "OVL473", semester: 7, requirements: [20,23], category: 1}, // 33
        { name: "Atividades Acad. Optativas", credits: 4, semester: 7, category: 1}, // 34
        // Eigth term
        { name: "Projeto Final de Curso", credits: 60,code:'OVLX01', semester: 8, category: 1, workload: 60}, // 35
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 8, category: 1}, // 36
        { name: "Atividades Acad. Optativas", credits: 4, semester: 8, category: 1}, // 37
    ]
]

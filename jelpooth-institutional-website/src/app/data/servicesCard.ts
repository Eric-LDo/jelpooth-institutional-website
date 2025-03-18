export interface Service {
    id?: number,
    title: string,
    text: string,
    icon: string
}

const services: Service[] = [
    {
        id: 1,
        title: 'Landing Page',
        text: 'Desenvolvimento de landing pages responsivas e otimizadas para conversão.',
        icon: 'pi pi-desktop'
    },
    {
        id: 2,
        title: 'Aplicações Web',
        text: 'Criação de aplicações web interativas e dinâmicas utilizando React.',
        icon: 'pi pi-globe'
    },
    {
        id: 3,
        title: 'Componentes Customizados',
        text: 'Desenvolvimento de componentes React reutilizáveis e customizados.',
        icon: 'pi pi-cog'
    },
    {
        id: 4,
        title: 'Integração com APIs',
        text: 'Integração de aplicações React com APIs RESTful e GraphQL.',
        icon: 'pi pi-cloud'
    },
    {
        id: 5,
        title: 'Otimização de Performance',
        text: 'Otimização de performance de aplicações React para melhorar a experiência do usuário.',
        icon: 'pi pi-chart-line'
    },
    {
        id: 6,
        title: 'Testes e Depuração',
        text: 'Implementação de testes unitários e depuração de aplicações React.',
        icon: 'pi pi-check'
    }
];

export default services;
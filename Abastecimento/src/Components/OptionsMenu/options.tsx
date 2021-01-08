import { SubOptionsMenuProps } from '../../pmenos-utils/types';
import { title, routes, categoriaMenu } from '../../Utils';

export const OptionsExpedicao: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: title.abrirCaminhao,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.abrirCaminhao,
    },
    {
        idOptions: 2,
        descricaoOptions: title.montarCaminhao,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.montarCaminhao,
    },
    {
        idOptions: 3,
        descricaoOptions: title.fecharCaminhao,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.fecharCaminhao,
    },
    {
        idOptions: 4,
        descricaoOptions: title.embarcarCaminhao,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.embarcarCaminhao,
    },
    {
        idOptions: 5,
        descricaoOptions: `${title.modificarPlaca} do Caminhão`,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.modificarPlacaDoCaminhao,
    },
    {
        idOptions: 6,
        descricaoOptions: title.forcarEncerramento,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.forcarEncerramento,
    },
    {
        idOptions: 7,
        descricaoOptions: title.consultarCaminhao,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.consultarCaminhao,
    },
    {
        idOptions: 8,
        descricaoOptions: `Consultar ${title.volumesNaoEscaneados}`,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.volumesNaoEscaneados,
    },
    {
        idOptions: 9,
        descricaoOptions: `Consultar ${title.filiaisNaoEmbarcadas}`,
        categoriaMenu: categoriaMenu.expedicao,
        route: routes.filiaisNaoEmbarcadas,
    },
];

export const OptionsReposicao: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: title.consultarPorCodigoDeBarras,
        categoriaMenu: categoriaMenu.reposicao,
        route: routes.consultarPorCodigoDeBarras,
    },
    {
        idOptions: 2,
        descricaoOptions: title.consultarPorEndereco,
        categoriaMenu: categoriaMenu.reposicao,
        route: routes.consultarPorEndereco,
    },
    {
        idOptions: 3,
        descricaoOptions: 'Consultar Endereços não Impressos',
        categoriaMenu: categoriaMenu.reposicao,
        route: routes.pedidosNaoImpressos,
    },
    {
        idOptions: 4,
        descricaoOptions: 'Repor',
        categoriaMenu: categoriaMenu.reposicao,
        route: routes.reposicaoDaLinha,
    },
    {
        idOptions: 5,
        descricaoOptions: 'Finalizar Reposição',
        categoriaMenu: categoriaMenu.reposicao,
        route: routes.finalizarReposicao,
    },
    {
        idOptions: 6,
        descricaoOptions: 'Consultar Pedido',
        categoriaMenu: categoriaMenu.reposicao,
        route: routes.consultarPedido,
    }
];

export const OptionsEntradaDeMercadoria: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: 'Criar Conferência',
        categoriaMenu: categoriaMenu.entradaDeMercadorias,
        route: routes.criarConferencia,
    },
    {
        idOptions: 2,
        descricaoOptions: 'Conferir',
        categoriaMenu: categoriaMenu.entradaDeMercadorias,
        route: routes.conferir,
    },
    {
        idOptions: 3,
        descricaoOptions: 'Excluir Conferência',
        categoriaMenu: categoriaMenu.entradaDeMercadorias,
        route: routes.excluirConferencia,
    },
    {
        idOptions: 4,
        descricaoOptions: 'Modificar Produto com Lote',
        categoriaMenu: categoriaMenu.entradaDeMercadorias,
        route: 'ModificarProdutoComLote',
    },
    {
        idOptions: 5,
        descricaoOptions: 'Modificar Produto sem Lote',
        categoriaMenu: categoriaMenu.entradaDeMercadorias,
        route: routes.modificarProdutoSemLote,
    }
];

export const OptionsDescarregamento: Array<SubOptionsMenuProps> = [{
        idOptions: 0,
        descricaoOptions: '',
        categoriaMenu: categoriaMenu.descarregamento,
        route: '',
    }
];

export const OptionsArmazenamento: Array<SubOptionsMenuProps> = [{
        idOptions: 0,
        descricaoOptions: '',
        categoriaMenu: categoriaMenu.armazenamento,
        route: '',
    }
];

export const OptionsConfiguracoes: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: 'Alterar centro de distribuição',
        categoriaMenu: categoriaMenu.configuracoes,
        route: routes.primeirasConfiguracoes,
    },
    {
        idOptions: 2,
        descricaoOptions: 'Deslogar',
        categoriaMenu: categoriaMenu.configuracoes,
        route: routes.login,
    },
];
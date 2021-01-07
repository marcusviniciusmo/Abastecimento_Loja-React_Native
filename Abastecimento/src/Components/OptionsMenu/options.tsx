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
        categoriaMenu: 'Expedição',
        route: 'ForcarEncerramento',
    },
    {
        idOptions: 7,
        descricaoOptions: title.consultarCaminhao,
        categoriaMenu: 'Expedição',
        route: 'ConsultarCaminhao',
    },
    {
        idOptions: 8,
        descricaoOptions: `Consultar ${title.volumesNaoEscaneados}`,
        categoriaMenu: 'Expedição',
        route: 'ConsultarVolumesNaoEscaneados',
    },
    {
        idOptions: 9,
        descricaoOptions: `Consultar ${title.filiaisNaoEmbarcadas}`,
        categoriaMenu: 'Expedição',
        route: 'ConsultarFiliaisNaoEmbarcadas',
    },
];

export const OptionsReposicao: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: title.consultarPorCodigoDeBarras,
        categoriaMenu: 'Reposição',
        route: 'ConsultarPorCodigoDeBarras',
    },
    {
        idOptions: 2,
        descricaoOptions: title.consultarPorEndereco,
        categoriaMenu: 'Reposição',
        route: 'ConsultarPorEndereco',
    },
    {
        idOptions: 3,
        descricaoOptions: 'Consultar Endereços não Impressos',
        categoriaMenu: 'Reposição',
        route: 'ConsultarEnderecosNaoImpressos',
    },
    {
        idOptions: 4,
        descricaoOptions: 'Repor',
        categoriaMenu: 'Reposição',
        route: 'Repor',
    },
    {
        idOptions: 5,
        descricaoOptions: 'Finalizar Reposição',
        categoriaMenu: 'Reposição',
        route: 'FinalizarReposicao',
    },
    {
        idOptions: 6,
        descricaoOptions: 'Consultar Pedido',
        categoriaMenu: 'Reposição',
        route: '',
    }
];

export const OptionsEntradaDeMercadoria: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: 'Criar Conferência',
        categoriaMenu: 'EntradaDeMercadorias',
        route: 'CriarConferencia',
    },
    {
        idOptions: 2,
        descricaoOptions: 'Conferir',
        categoriaMenu: 'EntradaDeMercadorias',
        route: 'Conferir',
    },
    {
        idOptions: 3,
        descricaoOptions: 'Excluir Conferência',
        categoriaMenu: 'EntradaDeMercadorias',
        route: 'ExcluirConferencia',
    },
    {
        idOptions: 4,
        descricaoOptions: 'Modificar Produto com Lote',
        categoriaMenu: 'EntradaDeMercadorias',
        route: 'ModificarProdutoComLote',
    },
    {
        idOptions: 5,
        descricaoOptions: 'Modificar Produto sem Lote',
        categoriaMenu: 'EntradaDeMercadorias',
        route: 'ModificarProdutoSemLote',
    }
];

export const OptionsDescarregamento: Array<SubOptionsMenuProps> = [{
        idOptions: 0,
        descricaoOptions: '',
        categoriaMenu: '',
        route: '',
    }
];

export const OptionsArmazenamento: Array<SubOptionsMenuProps> = [{
        idOptions: 0,
        descricaoOptions: '',
        categoriaMenu: '',
        route: '',
    }
];

export const OptionsConfiguracoes: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: 'Alterar centro de distribuição',
        categoriaMenu: 'Configuracoes',
        route: 'AlterarCentroDeDistribuicao',
    },
    {
        idOptions: 2,
        descricaoOptions: 'Deslogar',
        categoriaMenu: 'Configuracoes',
        route: 'Deslogar',
    },
];
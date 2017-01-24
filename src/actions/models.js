export const SELECT_MODEL='SELECT_MODEL';

export function selectModel(model=''){
    return{
      type: SELECT_MODEL,
      model:model
    }
};

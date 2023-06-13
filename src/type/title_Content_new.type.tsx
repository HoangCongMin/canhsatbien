import Featured from '../type/new.type'


interface ListCategoryItem {
   id:number
   name:string
   alias:string
   published:boolean
   ordering:number
   images:null
   trash:boolean
   language:string
   listItemHot:null
   listItemFeatured:null
   listItem:Featured[]
}

export default ListCategoryItem
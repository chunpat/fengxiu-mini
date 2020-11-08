Component({
  data: {},
  properties: {
    cell:Object
  },
  methods: {
    celltap(event){
      console.log('this.properties.cell',this.properties.cell)
      this.triggerEvent('celltap',{
          cell:this.properties.cell
      },{
          bubbles:true,
          composed:true
      })
    }
    // onTap(event){
    //   this.triggerEvent('celltap',{

    //   })
    // }
  }
})
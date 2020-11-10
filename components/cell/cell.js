Component({
  data: {},
  properties: {
    cell:Object
  },
  methods: {
    celltap(event){
      this.triggerEvent('celltap',{
          cell:this.properties.cell
      },{
          bubbles:true,
          composed:true
      })
    }
  }
})
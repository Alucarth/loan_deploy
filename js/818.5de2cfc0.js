"use strict";(self["webpackChunkloan_system"]=self["webpackChunkloan_system"]||[]).push([[818],{5398:function(l,e,a){var n=a(9377);class o{create(l){return n.Z.post("/address",l)}getPersonAdrress(l){return n.Z.get(`/address/${l}`)}}e.Z=new o},4848:function(l,e,a){var n=a(9377);class o{getAll(){return n.Z.get("/city")}create(l){return n.Z.post("/city",l)}delete(l){return n.Z["delete"](`/city/${l}`)}}e.Z=new o},9822:function(l,e,a){var n=a(9377);class o{getAll(){return n.Z.get("/person/clients")}create(l){return n.Z.post("/person",l)}createReferences(l){return n.Z.post("/person/reference",l)}show(l){return n.Z.get(`/person/${l}`)}getReferences(l){return n.Z.get(`/person/references/${l}`)}}e.Z=new o},1311:function(l,e,a){var n=a(9377);class o{getAll(){return n.Z.get("/country")}create(l){return n.Z.post("/country",l)}delete(l){return n.Z["delete"](`/country/${l}`)}}e.Z=new o},3342:function(l,e,a){var n=a(9377);class o{getAll(){return n.Z.get("/person")}create(l){return n.Z.post("/person",l)}}e.Z=new o},7252:function(l,e,a){var n=a(9377);class o{getAll(){return n.Z.get("/person_type")}create(l){return n.Z.post("/person_type",l)}delete(l){return n.Z["delete"](`/person_type/${l}`)}}e.Z=new o},818:function(l,e,a){a.r(e),a.d(e,{default:function(){return ne}});a(7658);var n=a(3396),o=a(9242),t=a(4870),u=a(4848),d=a(1311),s=a(3342),c=a(5398),r=a(9822),i=a(7252),p=a(2483),m=a(65);const _={class:"grid"},V={class:"col-4"},b=(0,n._)("label",{for:""},"Nombres:",-1),f=(0,n._)("br",null,null,-1),v={class:"col-4"},y=(0,n._)("label",{for:""},"Apellido Paterno:",-1),U=(0,n._)("br",null,null,-1),w={class:"col-4"},h=(0,n._)("label",{for:""},"Apellido Materno:",-1),k=(0,n._)("br",null,null,-1),g={class:"col-3"},x=(0,n._)("label",{for:""},"Carnet de Identidad:",-1),W=(0,n._)("br",null,null,-1),Z={class:"col-3"},C=(0,n._)("label",{for:""},"Extencion:",-1),A=(0,n._)("br",null,null,-1),D={class:"col-3"},H=(0,n._)("label",{for:""},"Ciudad de Expedicion:",-1),T=(0,n._)("br",null,null,-1),E={class:"col-3"},j=(0,n._)("label",{for:""},"Genero:",-1),P=(0,n._)("br",null,null,-1),R={class:"col-3"},$=(0,n._)("label",{for:""},"Dependencia:",-1),I=(0,n._)("br",null,null,-1),M={class:"col-3"},O=(0,n._)("label",{for:""},"Telefono:",-1),F=(0,n._)("br",null,null,-1),G={class:"col-3"},K=(0,n._)("label",{for:""},"Email:",-1),S=(0,n._)("br",null,null,-1),Y=["onClick"],q=(0,n._)("span",{class:"bx bxs-briefcase"},null,-1),z=[q],L=["onClick"],N=(0,n._)("span",{class:"bx bxs-trash-alt"},null,-1),B=[N],J={class:"grid"},Q={class:"col-3"},X=(0,n._)("label",{for:""},"Direccion",-1),ll=(0,n._)("br",null,null,-1),el={class:"col-3"},al=(0,n._)("label",{for:""},"Telefono",-1),nl=(0,n._)("br",null,null,-1),ol={class:"col-3"},tl=(0,n._)("label",{for:""},"Tipo de Direccion",-1),ul=(0,n._)("br",null,null,-1),dl={class:"col-3"},sl=(0,n._)("label",{for:""},"Zona",-1),cl=(0,n._)("br",null,null,-1),rl={class:"col-3"},il=(0,n._)("label",{for:""},"Comentarios",-1),pl=(0,n._)("br",null,null,-1),ml={class:"panel-heading"},_l={class:"flex justify-content-between"},Vl=(0,n._)("div",null," Ocupacion ",-1),bl=["onClick"],fl={class:"panel-block grid"},vl={class:"col-3"},yl=(0,n._)("label",{for:""},"Ocupacion",-1),Ul=(0,n._)("br",null,null,-1),wl={class:"col-3"},hl=(0,n._)("label",{for:""}," Tipo de Ocupacion",-1),kl=(0,n._)("br",null,null,-1),gl={class:"col-3"},xl=(0,n._)("label",{for:""}," Ocupacion Principal",-1),Wl=(0,n._)("br",null,null,-1),Zl={class:"col-3"},Cl=(0,n._)("label",{for:""}," Empresa ",-1),Al=(0,n._)("br",null,null,-1),Dl={class:"col-3"},Hl=(0,n._)("label",{for:""}," Tiempo de Trabajo",-1),Tl=(0,n._)("br",null,null,-1),El={class:"col-3"},jl=(0,n._)("label",{for:""}," Ingresos",-1),Pl=(0,n._)("br",null,null,-1),Rl={class:"col-3"},$l=(0,n._)("label",{for:""}," Periodo de Ingreso",-1),Il=(0,n._)("br",null,null,-1),Ml={class:"col-3"},Ol=(0,n._)("label",{for:""}," Dias Trabajo ",-1),Fl=(0,n._)("br",null,null,-1),Gl={class:"col-3"},Kl=(0,n._)("label",{for:""}," Horas Trabajo ",-1),Sl=(0,n._)("br",null,null,-1),Yl={class:"col-3"},ql=(0,n._)("label",{for:""},"Descripcion",-1),zl=(0,n._)("br",null,null,-1),Ll={class:"table-container w-full"},Nl={class:"table w-full"},Bl=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nombres "),(0,n._)("th",null,"Apellido Paterno "),(0,n._)("th",null,"Apellido Materno "),(0,n._)("th",null,"Edad"),(0,n._)("th")])],-1),Jl=["onUpdate:modelValue"],Ql=["onUpdate:modelValue"],Xl=["onUpdate:modelValue"],le=["onUpdate:modelValue"];var ee=(0,n.aZ)({__name:"CreateView",setup(l){const e=(0,p.tv)(),a=(0,m.oR)(),q=(0,t.iH)({}),N=(0,t.iH)([{name:"Masculino",id:"M"},{name:"Femenino",id:"F"}]),ee=(0,t.qj)([]),ae=(0,t.qj)([]),ne=(0,t.iH)([]),oe=(0,t.iH)([]),te=(0,t.iH)(),ue=(0,t.iH)(),de=()=>{ae.push({})},se=(0,n.Fl)((()=>a.state.auth.account)),ce=l=>{ae.splice(l,1)},re=()=>{ee.push({ocupations:[]})},ie=l=>{l.push({})},pe=(l,e)=>{l.splice(e,1)},me=l=>{ee.splice(l,1)},_e=()=>{u.Z.getAll().then((l=>{console.log(l.data),ne.value=l.data}))},Ve=()=>{d.Z.getAll().then((l=>{oe.value=l.data}))},be=(0,t.iH)([]),fe=()=>{i.Z.getAll().then((l=>{console.log(l.data),be.value=l.data,be.value.forEach((l=>{"cliente"===l.name&&(te.value=l),"referencia"===l.name&&(ue.value=l)}))}))},ve=async()=>{let l=q.value;l.account_id=se.value.id,l.identity_card_city_id=q.value.identity_card_city.id,l.person_type_id=te.value.id,l.gender=q.value.gender.id,console.log("payload",l);let a=await s.Z.create(l),n=a.data,o=[];ee.forEach((l=>{let e=l;e.person=n,o.push(e)})),a=await c.Z.create(o),console.log("array",a.data),o=[],ae.forEach((l=>{let e=l;e.person_id=n.id,e.person_type_id=ue.value.id,o.push(e)})),a=await r.Z.createReferences(o),console.log(a.data),e.push("/clients")};return(0,n.bv)((()=>{console.log("load component"),_e(),Ve(),fe()})),(l,a)=>{const u=(0,n.up)("InputText"),d=(0,n.up)("Dropdown"),s=(0,n.up)("AccordionTab"),c=(0,n.up)("Button"),r=(0,n.up)("Panel"),i=(0,n.up)("Accordion"),p=(0,n.up)("Card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(p,null,{title:(0,n.w5)((()=>[(0,n.Uk)(" Registro de Cliente ")])),content:(0,n.w5)((()=>[(0,n.Wm)(i,{multiple:!0,activeIndex:[0]},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{header:"1. Datos Personales "},{default:(0,n.w5)((()=>[(0,n._)("div",_,[(0,n._)("div",V,[b,(0,n.Uk)(),f,(0,n.Wm)(u,{type:"text",modelValue:q.value.names,"onUpdate:modelValue":a[0]||(a[0]=l=>q.value.names=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",v,[y,(0,n.Uk)(),U,(0,n.Wm)(u,{type:"text",modelValue:q.value.father_last_name,"onUpdate:modelValue":a[1]||(a[1]=l=>q.value.father_last_name=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",w,[h,(0,n.Uk)(),k,(0,n.Wm)(u,{type:"text",modelValue:q.value.mother_last_name,"onUpdate:modelValue":a[2]||(a[2]=l=>q.value.mother_last_name=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",g,[x,(0,n.Uk)(),W,(0,n.Wm)(u,{type:"text",modelValue:q.value.identity_card,"onUpdate:modelValue":a[3]||(a[3]=l=>q.value.identity_card=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",Z,[C,(0,n.Uk)(),A,(0,n.Wm)(u,{type:"text",modelValue:q.value.extension,"onUpdate:modelValue":a[4]||(a[4]=l=>q.value.extension=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",D,[H,(0,n.Uk)(),T,(0,n.Wm)(d,{modelValue:q.value.identity_card_city,"onUpdate:modelValue":a[5]||(a[5]=l=>q.value.identity_card_city=l),options:ne.value,optionLabel:"short_name",placeholder:"Seleccione Expedicion",class:"w-full"},null,8,["modelValue","options"])]),(0,n._)("div",E,[j,(0,n.Uk)(),P,(0,n.Wm)(d,{modelValue:q.value.gender,"onUpdate:modelValue":a[6]||(a[6]=l=>q.value.gender=l),options:N.value,optionLabel:"name",placeholder:"Seleccione un Genero",class:"w-full"},null,8,["modelValue","options"])]),(0,n._)("div",R,[$,(0,n.Uk)(),I,(0,n.Wm)(u,{type:"text",modelValue:q.value.dependents,"onUpdate:modelValue":a[7]||(a[7]=l=>q.value.dependents=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",M,[O,(0,n.Uk)(),F,(0,n.Wm)(u,{type:"text",modelValue:q.value.personal_number,"onUpdate:modelValue":a[8]||(a[8]=l=>q.value.personal_number=l),class:"w-full"},null,8,["modelValue"])]),(0,n._)("div",G,[K,(0,n.Uk)(),S,(0,n.Wm)(u,{type:"text",modelValue:q.value.email,"onUpdate:modelValue":a[9]||(a[9]=l=>q.value.email=l),class:"w-full"},null,8,["modelValue"])])])])),_:1}),(0,n.Wm)(s,{header:"2. Direcciones"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{icon:"bx bx-plus",label:"Adicionar Direccion",onClick:a[10]||(a[10]=l=>re()),class:"mb-2"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(ee,((l,e)=>((0,n.wg)(),(0,n.j4)(r,{header:`Direccion ${e+1}`,key:e},{icons:(0,n.w5)((()=>[(0,n._)("button",{class:"p-panel-header-icon p-link mr-2",onClick:e=>ie(l.ocupations)},z,8,Y),(0,n._)("button",{class:"p-panel-header-icon p-link mr-2",onClick:l=>me(e)},B,8,L)])),default:(0,n.w5)((()=>[(0,n._)("div",J,[(0,n._)("div",Q,[X,(0,n.Uk)(),ll,(0,n.Wm)(u,{type:"text",modelValue:l.address,"onUpdate:modelValue":e=>l.address=e,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",el,[al,(0,n.Uk)(),nl,(0,n.Wm)(u,{type:"text",modelValue:l.phone_number,"onUpdate:modelValue":e=>l.phone_number=e,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",ol,[tl,(0,n.Uk)(),ul,(0,n.Wm)(u,{type:"text",modelValue:l.address_type,"onUpdate:modelValue":e=>l.address_type=e,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",dl,[sl,(0,n.Uk)(),cl,(0,n.Wm)(u,{type:"text",modelValue:l.zone,"onUpdate:modelValue":e=>l.zone=e,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",rl,[il,(0,n.Uk)(),pl,(0,n.Wm)(u,{type:"text",modelValue:l.comments,"onUpdate:modelValue":e=>l.comments=e,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.ocupations,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"panel",key:a},[(0,n._)("div",ml,[(0,n._)("div",_l,[Vl,(0,n._)("div",null,[(0,n._)("i",{class:"bx bxs-trash-alt",onClick:e=>pe(l.ocupations,a)},null,8,bl)])])]),(0,n._)("div",fl,[(0,n._)("div",vl,[yl,(0,n.Uk)(),Ul,(0,n.Wm)(u,{type:"text",modelValue:e.ocupation,"onUpdate:modelValue":l=>e.ocupation=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",wl,[hl,(0,n.Uk)(),kl,(0,n.Wm)(u,{type:"text",modelValue:e.ocupation_type,"onUpdate:modelValue":l=>e.ocupation_type=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",gl,[xl,(0,n.Uk)(),Wl,(0,n.Wm)(u,{type:"text",modelValue:e.main_ocupation,"onUpdate:modelValue":l=>e.main_ocupation=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Zl,[Cl,(0,n.Uk)(),Al,(0,n.Wm)(u,{type:"text",modelValue:e.company,"onUpdate:modelValue":l=>e.company=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Dl,[Hl,(0,n.Uk)(),Tl,(0,n.Wm)(u,{type:"text",modelValue:e.ocupation_type,"onUpdate:modelValue":l=>e.ocupation_type=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",El,[jl,(0,n.Uk)(),Pl,(0,n.Wm)(u,{type:"text",modelValue:e.net_income,"onUpdate:modelValue":l=>e.net_income=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Rl,[$l,(0,n.Uk)(),Il,(0,n.Wm)(u,{type:"text",modelValue:e.periodicity_income,"onUpdate:modelValue":l=>e.periodicity_income=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Ml,[Ol,(0,n.Uk)(),Fl,(0,n.Wm)(u,{type:"text",modelValue:e.workdays,"onUpdate:modelValue":l=>e.workdays=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Gl,[Kl,(0,n.Uk)(),Sl,(0,n.Wm)(u,{type:"text",modelValue:e.working_hours,"onUpdate:modelValue":l=>e.working_hours=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])]),(0,n._)("div",Yl,[ql,(0,n.Uk)(),zl,(0,n.Wm)(u,{type:"text",modelValue:e.description,"onUpdate:modelValue":l=>e.description=l,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])])])])))),128))])])),_:2},1032,["header"])))),128))])),_:1}),(0,n.Wm)(s,{header:"3. Referencias"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{type:"button",label:"Adicionar Referencia",icon:"pi pi-plus",onClick:de}),(0,n._)("div",Ll,[(0,n._)("table",Nl,[Bl,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(ae,((l,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{class:"input",type:"text","onUpdate:modelValue":e=>l.names=e,placeholder:""},null,8,Jl),[[o.nr,l.names]])]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{class:"input",type:"text","onUpdate:modelValue":e=>l.father_last_name=e,placeholder:""},null,8,Ql),[[o.nr,l.father_last_name]])]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{class:"input",type:"text","onUpdate:modelValue":e=>l.mother_last_name=e,placeholder:""},null,8,Xl),[[o.nr,l.mother_last_name]])]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{class:"input",type:"text","onUpdate:modelValue":e=>l.age=e,placeholder:""},null,8,le),[[o.nr,l.age]])]),(0,n._)("td",null,[(0,n.Wm)(c,{icon:"bx bxs-trash-alt",severity:"danger",text:"",rounded:"","aria-label":"Cancel",onClick:l=>ce(e)},null,8,["onClick"])])])))),128))])])])])),_:1})])),_:1})])),footer:(0,n.w5)((()=>[(0,n.Wm)(c,{icon:"pi pi-check",label:"Guardar",onClick:a[11]||(a[11]=l=>ve())}),(0,n.Wm)(c,{icon:"pi pi-times",label:"Cancelar",severity:"secondary",onClick:a[12]||(a[12]=l=>(0,t.SU)(e).push("/clients")),style:{"margin-left":"0.5em"}})])),_:1})])}}});const ae=ee;var ne=ae}}]);
//# sourceMappingURL=818.5de2cfc0.js.map
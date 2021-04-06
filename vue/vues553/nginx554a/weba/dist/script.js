const app = new Vue({
  el: "#app",
  data: {
    filter: "",
    rows: [
    { application: "Daily Meeting", 
      mdescription: "Daily Meeting Issues Tracking  ( ops556 )",
      tlink: "http://10.4.1.231:6537" },

    {
      application: ".",
      mdescription: "tbd",
      tlink: "#" }
    ] 
    },


  methods: {
    highlightMatches(text) {
      const matchExists = text.
      toLowerCase().
      includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    } 
  },

  computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const mdescription = row.mdescription.toLowerCase();
        const application = row.application.toLowerCase();
        const searchTerm = this.filter.toLowerCase();
        
        return (
          application.includes(searchTerm) || mdescription.includes(searchTerm));
          
        });
      } 
  } 
});

    
    
    
    
        // notes
        // const mdescription = row.mdescription.toString().toLowerCase();
import './styles.scss'

const StudentFormv2 = () => {
    return (
        <div class="floating-form">

        <div class="floating-label">      
          <input class="floating-input" type="text" placeholder=" "/>
          <span class="highlight"></span>
          <label>Text</label>
        </div>
    
        <div class="floating-label">      
          <input class="floating-input" type="text" onclick="(this.type='time')" placeholder=" "/>
          <span class="highlight"></span>
          <label>Time</label>
        </div>
    
        <div class="floating-label">      
          <input class="floating-input" type="text" onclick="(this.type='date')" placeholder=" "/>
          <span class="highlight"></span>
          <label>Date</label>
        </div>

        <div class="floating-label">      
          <input class="floating-input" type="password" placeholder=" "/>
          <span class="highlight"></span>
          <label>Password</label>
        </div>

        <div class="floating-label">  
          <select class="floating-select" onclick="this.setAttribute('value', this.value);" value="">
            <option value=""></option>
            <option value="1">Alabama</option>
            <option value="2">Boston</option>
            <option value="3">Ohaio</option>
            <option value="4">New York</option>
            <option value="5">Washington</option>
          </select>
          <span class="highlight"></span>
          <label>Select</label>
        </div>
    
        <div class="floating-label">      
          <textarea class="floating-input floating-textarea" placeholder=" "></textarea>
          <span class="highlight"></span>
          <label>Textarea</label>
        </div>
     
    </div>
    )
}

export default StudentFormv2

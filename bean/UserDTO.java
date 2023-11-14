package user.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="usertable")
@Data
public class UserDTO {
	@Column(name="name", nullable = false, length = 30)
	private String name;
	
	@Id
	@Column(name="id", length = 30)
	private String id;
	
	
	@Column(name="pwd", nullable = false, length = 30)
	private String pwd;
	
	public String getId() {
        return id;
    }

    // id 필드에 대한 Setter 메서드 추가
    public void setId(String id) {
        this.id = id;
    }
}

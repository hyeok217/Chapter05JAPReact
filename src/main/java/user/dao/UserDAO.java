package user.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import user.bean.UserDTO;

public interface UserDAO extends JpaRepository<UserDTO, String> {

	//public Page<UserDTO> findByNameContaining(String keyword);

	//public Page<UserDTO> findByIdContaining(String keyword);
	
	//검색 대상이 테이블이 아니라 영속성 컨텍스트에 등록된 엔티티이다.
	// ?1는 첫번째 파라메터를 의미한다.
	/*
	@Query("select userDTO from UserDTO userDTO where userDTO.name like concat('%', ?1, '%')")
	public Page<UserDTO> getUserSearchName(String keyword);
	
	@Query("select userDTO from UserDTO userDTO where userDTO.id like concat('%', ?1, '%')")
	public Page<UserDTO> getUserSearchId(String keyword);
	*/
	
	@Query("select userDTO from UserDTO userDTO where userDTO.name like concat('%', :keyword, '%')")
	public Page<UserDTO> getUserSearchName(@Param("keyword") String keyword, Pageable pageable);
	
	@Query("select userDTO from UserDTO userDTO where userDTO.id like concat('%', :keyword, '%')")
	public Page<UserDTO> getUserSearchId(@Param("keyword") String keyword, Pageable pageable);

}











<template>
	<div class="layout">
		<Layout :style="{height:'100%'}">
			<Sider ref="side1" :width='180'>
				<Menu active-name="" theme="dark" width="auto" :open-names="['']">
					<router-link to="/menu">
						<MenuItem name="1-1">
						<Icon type="ios-navigate"></Icon>
						<span>首页</span>
						</MenuItem>
					</router-link>
					<Submenu name="2">
						<template slot="title">
							<Icon type="md-speedometer" /> 数据展示
						</template>
						<router-link to="/data">
							<MenuItem name="2-1">
							<span style="font-size: 13px">数据统计</span>
							</MenuItem>
						</router-link>
						<router-link to="/data/dataDeatils">
							<MenuItem name="2-2">
							<span style="font-size: 13px">数据查询</span>
							</MenuItem>
						</router-link>
					</Submenu>

					<router-link to="/infoSearch">
						<MenuItem name="3-1">
						<Icon type="md-search" />
						<span>空间查询</span>
						</MenuItem>
					</router-link>

					<router-link to="/recommendation/housingPreference">
						<MenuItem name="6-1">
						<Icon type="md-thumbs-up" />
						<span>就业推荐</span>
						</MenuItem>
					</router-link>
					<router-link to="/userManager">
						<MenuItem name="9-1" v-if="show">
						<Icon type="md-contacts" />
						<span>用户管理</span>
						</MenuItem>
					</router-link>
					<router-link to="/personalcenter">
						<MenuItem name="11-1">
						<Icon type="md-person" />
						<span>个人中心</span>
						</MenuItem>
					</router-link>
				</Menu>
			</Sider>
			<Content>
				<Header :style="{padding: 0}" class="layout-header-bar">
					<Breadcrumb>
						<Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
						<BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}
						</BreadcrumbItem>
					</Breadcrumb>
				</Header>
				<router-view />
			</Content>
		</Layout>
	</div>
</template>

<script>
	export default {
		mounted() {
			var roleid = JSON.parse(sessionStorage.getItem("roleId"));
			if (roleid === "R0001" || roleid === "R0002") {
				this.show = true;
			} else {
				this.show = false;
			}
			this.w_height = window.innerHeight;
			window.onresize = () => {
				this.w_height = window.innerHeight;
			};
		},
		data() {
			return {
				show: true
			};
		},
		components: {
			factor
		}
	};
</script>

<style lang="less" scoped>
	// .ivu-layout {
	//   height: 1024px;
	// }
	// .wripper {
	//   height: 100%;
	//   width: 100%;
	//   padding-top: 20px;
	//   /*background: url(../../assets/img/house.jpg)  no-repeat ;*/
	// }
	.layout {
		//   border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow-y: hidden;
		height: 1000px;
	}

	.layout-header-bar {
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	}

	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}

	.menu-icon {
		transition: all 0.3s;
	}

	.rotate-icon {
		transform: rotate(-90deg);
	}

	.menu-item span {
		display: inline-block;
		overflow: hidden;
		width: 69px;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: bottom;
		transition: width 0.2s ease 0.2s;
	}

	.menu-item i {
		transform: translateX(0px);
		transition: font-size 0.2s ease, transform 0.2s ease;
		vertical-align: middle;
		font-size: 16px;
	}

	.collapsed-menu span {
		width: 0px;
		transition: width 0.2s ease;
	}

	.collapsed-menu i {
		transform: translateX(5px);
		transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
		vertical-align: middle;
		font-size: 22px;
	}
</style>

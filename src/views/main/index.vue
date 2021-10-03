<template>
	<!-- 上方导航栏 -->
	<div class="layout">
		<Layout>
			<Header class="header">
				<Row type="flex" justify="start" class="code-row-bg">
					<!-- logo图标 -->
					<Col span="1">
					<div @click="myMenu" style="margin-left: 8px">
						<img src="../../assets/img/logo.png" style="height: 50px;width:50px;margin-top: 2px"
							alt="logo" />
					</div>
					</Col>

					<!-- 系统标题 -->
					<Col span="9">
					<span style="margin-left: 3px; font-size: 25px;color: white; font-weight: bolder;">
						网络招聘大数据分析与可视化系统
					</span>
					<span class="sub-title">
						<span>({{this.name}})</span>
					</span>
					<!-- <span class="toggle">
              <Icon type="ios-arrow-down"></Icon>
              <div class="ivu-poptip-arrow"></div>
              <span class="poupTitle">
                <Navigation v-if="nav" class="nav" />
              </span>
              <span class="poupTitle1">
                <Navigation1 v-if="nav1" class="nav" />
              </span>
            </span> -->
					</Col>

					<!-- 导航栏 -->
					<!-- 职位搜索 -->
					<div style="width: 125px;height: 100%;"></div>
					<Col span="2">
					<div class="user-tools">
						<router-link to="/recommendation/housingPreference">
							<div class="user-info">
								<p style="color: #fff;margin-left: 0px;">
									<icon type="md-search" :size="25" />
									<span class="nav">职位搜索</span>
								</p>
							</div>
						</router-link>
					</div>
					</Col>


					<!-- 就业统计 -->
					<Col span="2">
					<router-link to="/compareHouse">
						<div class="user-tools">
							<div class="user-info">
								<p style="color: #fff;margin-left: 30px;">
									<icon type="md-speedometer" :size="25" />
									<span class="nav">就业统计</span>
								</p>
							</div>
						</div>
					</router-link>
					</Col>

					<!-- 空间查询 -->
					<!-- 备用代码<Col span="2"> <div class="user-tools"> <div class="user-info" @click="jumpsearch"> <p style="color: #fff;margin-left: 30px;"> <icon type="md-pin" :size="25" /> <span class="nav">空间查询</span> </p> </div> </div> </Col>-->
					<Col span="3">
					<div class="user-tools">
						<Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
							<div class="user-info">
								<p style="color: #fff;margin-left: 20px;">
									<icon type="md-pin" :size="25" />
									<span class="nav">空间查询</span>
									<Icon type="ios-arrow-down"></Icon>
								</p>
							</div>
							<DropdownMenu slot="list">
								<router-link to="/infoSearch">
									<div>
										<DropdownItem>
											<span>自定义查询</span>
										</DropdownItem>
									</div>
								</router-link>
								<router-link to="/ConditionalQueryMap">
									<div>
										<DropdownItem>
											<span>条件查询</span>
										</DropdownItem>
									</div>
								</router-link>
							</DropdownMenu>
						</Dropdown>
					</div>
					</Col>

					<!-- 技能分析 -->
					<Col span="2">
						<div class="user-tools">
							<div class="user-info" @click="jumpdata">
								<p style="color: #fff;margin-left: 15px;">
									<Icon type="md-calculator" :size="25" /> <span class="nav">技能分析</span>
								</p>
							</div>
						</div>
					</Col>

					<!-- 专题制图 -->
					<!-- <Col span="2">
            <div class="user-tools">
              <Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
                <div class="user-info" @click="jumpmanger">
                  <p style="color: #fff;margin-left: 33px;">
                    <icon type="md-globe" :size="25" />
										<span class="nav">test</span>
                  </p>
                </div>
              </Dropdown>
            </div>
          </Col> -->

					<!-- 功能待定 -->
					<Col span="3">
					<div class="user-tools">
						<Dropdown :transfer="false" @on-click="onUserItemClick">
							<div class="user-info">
								<p style="color: #fff;margin-left: 12px;">
									<icon type="md-globe" :size="25" />
									<span class="nav">专题制图</span>
									<Icon type="ios-arrow-down"></Icon>
								</p>
							</div>
							<DropdownMenu slot="list">
								<div @click="map1()">
									<DropdownItem >
										<span>职位点聚合专题图</span>
									</DropdownItem>
								</div>
								<div @click="map2()">
									<DropdownItem >
										<span>职位分布时序专题图</span>
									</DropdownItem>
								</div>

								<div @click="map4()">
									<DropdownItem >
										<span>职位薪资热力专题图</span>
									</DropdownItem>
								</div>
								<div @click="map5()">
									<DropdownItem >
										<span>招聘人数分级专题图</span>
									</DropdownItem>
								</div>
								<div @click="map6()">
									<DropdownItem >
										<span>多要素统计专题图</span>
									</DropdownItem>
								</div>
								<DropdownItem name="exit" >
									<span>退出系统</span>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
					</Col>
				</Row>
			</Header>
			<Content :style="{minHeight: 'w_height-55', margin: '55px 0px 0px 0px', background: '#fff'}">
				<router-view />
			</Content>
		</Layout>
	</div>
</template>
<script>
	import Server from "@/core/server";
	import {
		services
	} from "@/core/config/services";
	import Navigation from "@/views/menu/components";
	import Navigation1 from "@/views/menu/components/userIndex";
	import {
		login
	} from "@/views/login/js/login.js";
	import ChangePsd from "@/views/login/components/changepsd";
	import {
		computeh
	} from "@/core/computeh";
	export default {
		mixins: [login, computeh],
		provide() {
			return {
				reload: this.reload
			};
		},
		data() {
			return {
				name: "简单搜索",
				nav: false,
				nav1: false,
				user: "",
				modal: false,
				isRouterAlive: true,
				roleid: ""
			};
		},
		mounted() {
			// debugger;
			this.user = JSON.parse(sessionStorage.getItem("userAccount"));
			this.roleid = JSON.parse(sessionStorage.getItem("roleId"));
			if (this.roleid == "R0002") {
				this.nav = true;
			} else {
				this.nav1 = true;
			}
			console.log(this.user);
		},
		methods: {
			myMenu() {
				this.$router.push("/menu");
			},
			reload() {
				this.isRouterAlive = false;
				this.$nextTick(function() {
					this.isRouterAlive = true;
				});
			},
			map1() {
				var _this = this;
				_this.$router.push("/personalcenter");
			},
			map2() {
				this.$router.push("/collection");
			},

			map4() {
				this.$router.push("/SalaryHeatmap");
			},
			map5() {
				this.$router.push("/GradedColor");
			},
			map6() {
				this.$router.push("/ThemeGraph");
			},
			jumpmanger() {
				this.$router.push("/userManager");
			},
			getPath() {
				this.name = this.$route.name;
			},

			jumpdata() {
				var _this = this;
				_this.$router.push("/data");
			},
			jumpsearch() {
				var _this = this;
				_this.$router.push("/infoSearch");
			},
			onSubmit() {
				this.$refs.changepsd.onSubmit();
			},
			onUserItemClick(name) {
				switch (name) {
					case "changePsd":
						this.modal = true;
						break;
					case "exit":
						this.exit();
						break;
				}
			},
			onCancel() {
				this.modal = false;
			},
			exit() {
				this.$Modal.confirm({
					title: "离开系统",
					content: "您确定离开系统吗？",
					onOk: () => {
						sessionStorage.clear();
						this.$router.push({
							path: "/login"
						});
					}
				});
			}
		},
		watch: {
			$route: "getPath"
		},
		components: {
			Navigation,
			Navigation1,
			ChangePsd
		}
	};
</script>

<style lang="less" scoped>
	.body {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.header {
		background: rgba(0, 0, 0, 0.9);
		height: 56px;
		padding: 0;
		position: fixed;
		line-height: 56px;
	}

	.user-tools {
		text-align: center;
		// background-color: #3CB950;
	}

	p {
		height: 56px;
		line-height: 56px;
		font-size: 15px;
		font-weight: bold;
		cursor: pointer;

		* {
			vertical-align: middle;
		}
	}

	.nav {
		font-size: 17px;
	}

	.navName {
		font-size: 18px;
		font-weight: bold;
	}

	.toggle {
		font-size: 15px;
		color: white;
		margin-left: 3px;
		display: inline-block;
		cursor: pointer;
	}

	.toggle:hover .poupTitle {
		display: block;
	}

	.toggle:hover .poupTitle1 {
		display: block;
	}

	.sub-title {
		margin-left: 1px;
		font-size: 18px;
		font-weight: bold;
		color: white;

		.icon-chevron-down {
			padding: 0px;
		}
	}

	.sub-title .icon-chevron-down:hover {
		cursor: pointer;
	}

	.poupTitle:hover {
		display: block;
	}

	.poupTitle1:hover {
		display: block;
	}

	.demo-badge {
		float: right;
		width: 22px;
		height: 22px;
		background: #eee;
		border-radius: 6px;
		display: inline-block;
	}

	.poupTitle {
		position: absolute;
		top: 55px;
		left: 90px;
		display: none;
		will-change: top, left;
		width: 800px;
		background: white;
		z-index: 8;
		padding: 10px 0px 0px 20px;
	}

	.poupTitle1 {
		position: absolute;
		top: 55px;
		left: 90px;
		display: none;
		will-change: top, left;
		width: 680px;
		background: white;
		z-index: 8;
		padding: 10px 0px 0px 20px;
	}
</style>
